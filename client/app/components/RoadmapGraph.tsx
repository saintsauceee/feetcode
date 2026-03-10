'use client';

import { useState, useRef, useCallback, useEffect, useLayoutEffect } from 'react';
import {
  nodes,
  edges,
  NODE_W,
  NODE_H,
  GRAPH_W,
  GRAPH_H,
  type TopicNode,
  type Difficulty,
  toSlug,
} from '../data/roadmap';

interface PanelState {
  node: TopicNode;
  x: number;
  y: number;
}

const DIFFICULTY_STYLES: Record<Difficulty, string> = {
  Easy: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  Medium: 'text-amber-700 bg-amber-50 border-amber-200',
  Hard: 'text-red-700 bg-red-50 border-red-200',
};

function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span
      className={`shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded border ${DIFFICULTY_STYLES[difficulty]}`}
    >
      {difficulty}
    </span>
  );
}

function buildEdgePath(from: TopicNode, to: TopicNode): string {
  const sx = from.x + NODE_W / 2;
  const sy = from.y + NODE_H;
  const ex = to.x + NODE_W / 2;
  const ey = to.y;
  const my = (sy + ey) / 2;
  return `M ${sx} ${sy} C ${sx} ${my}, ${ex} ${my}, ${ex} ${ey}`;
}

function nodeById(id: string): TopicNode {
  return nodes.find((n) => n.id === id)!;
}

export default function RoadmapGraph() {
  const [panel, setPanel] = useState<PanelState | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleNodeClick = useCallback(
    (node: TopicNode, e: React.MouseEvent) => {
      e.stopPropagation();
      if (activeId === node.id) {
        setPanel(null);
        setActiveId(null);
        return;
      }

      const PANEL_W = 320;
      const vw = window.innerWidth;

      // Place panel to the right of click, flip left if it would overflow
      let x = e.clientX + 16;
      if (x + PANEL_W > vw - 8) x = e.clientX - PANEL_W - 16;

      // Initial y near the click — useLayoutEffect will clamp vertically
      // after the panel renders and we know its actual height
      const y = e.clientY - 16;

      setPanel({ node, x, y });
      setActiveId(node.id);
    },
    [activeId],
  );

  // After the panel renders, clamp it so it never goes below the viewport
  useLayoutEffect(() => {
    if (!panel || !panelRef.current) return;
    const rect = panelRef.current.getBoundingClientRect();
    const vh = window.innerHeight;
    const MARGIN = 8;

    if (rect.bottom > vh - MARGIN) {
      const clampedY = Math.max(MARGIN, vh - rect.height - MARGIN);
      setPanel((prev) => (prev ? { ...prev, y: clampedY } : null));
    }
  }, [panel?.node.id]);

  const closePanel = useCallback(() => {
    setPanel(null);
    setActiveId(null);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePanel();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [closePanel]);

  return (
    <>
      {/* Graph canvas */}
      <div
        ref={containerRef}
        className="relative mx-auto"
        style={{ width: GRAPH_W, height: GRAPH_H }}
        onClick={closePanel}
      >
        {/* SVG edges */}
        <svg
          className="absolute inset-0 pointer-events-none"
          width={GRAPH_W}
          height={GRAPH_H}
          aria-hidden="true"
        >
          <defs>
            {/* Open chevron arrowhead — inherits stroke color from the referencing path */}
            <marker
              id="arrow"
              markerWidth="10"
              markerHeight="8"
              refX="8"
              refY="4"
              orient="auto"
            >
              <path
                d="M 1 1 L 8 4 L 1 7"
                fill="none"
                stroke="context-stroke"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>
          {edges.map((edge, i) => {
            const from = nodeById(edge.from);
            const to = nodeById(edge.to);
            const isActive =
              activeId === edge.from || activeId === edge.to;
            return (
              <path
                key={i}
                d={buildEdgePath(from, to)}
                fill="none"
                stroke={isActive ? '#18181b' : '#d4d4d8'}
                strokeWidth={1.5}
                markerEnd="url(#arrow)"
              />
            );
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => {
          const isActive = activeId === node.id;
          return (
            <button
              key={node.id}
              onClick={(e) => handleNodeClick(node, e)}
              className={`absolute flex items-center justify-center text-xs font-semibold rounded-md border transition-all duration-150 cursor-pointer select-none
                ${
                  isActive
                    ? 'bg-zinc-900 text-white border-zinc-900 shadow-md'
                    : 'bg-white text-zinc-800 border-zinc-300 hover:border-zinc-500 hover:shadow-sm'
                }`}
              style={{
                left: node.x,
                top: node.y,
                width: NODE_W,
                height: NODE_H,
              }}
            >
              {node.label}
            </button>
          );
        })}
      </div>

      {/* Floating panel */}
      {panel && (
        <div
          ref={panelRef}
          className="fixed z-50 bg-white border border-zinc-200 rounded-xl shadow-2xl overflow-hidden"
          style={{ left: panel.x, top: panel.y, width: 320 }}
          onClick={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100">
            <div>
              <p className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider mb-0.5">
                NeetCode 150
              </p>
              <h3 className="text-sm font-semibold text-zinc-900 leading-tight">
                {panel.node.label}
              </h3>
            </div>
            <button
              onClick={closePanel}
              className="text-zinc-400 hover:text-zinc-700 transition-colors w-7 h-7 flex items-center justify-center rounded-md hover:bg-zinc-100"
              aria-label="Close"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 1l10 10M11 1L1 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Problem list */}
          <div className="max-h-96 overflow-y-auto" style={{ overscrollBehavior: 'contain' }}>
            {panel.node.problems.map((problem, i) => (
              <a
                key={problem.id}
                href={`https://leetcode.com/problems/${toSlug(problem)}/`}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-4 py-2.5 hover:bg-zinc-50 transition-colors ${
                  i < panel.node.problems.length - 1
                    ? 'border-b border-zinc-50'
                    : ''
                }`}
              >
                <span className="text-xs text-zinc-400 font-mono w-8 shrink-0">
                  {problem.id}
                </span>
                <span className="text-xs text-zinc-700 flex-1 leading-snug">
                  {problem.title}
                </span>
                <DifficultyBadge difficulty={problem.difficulty} />
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="px-4 py-2.5 border-t border-zinc-100 bg-zinc-50">
            <p className="text-[10px] text-zinc-400">
              {panel.node.problems.length} problems ·{' '}
              {panel.node.problems.filter((p) => p.difficulty === 'Easy').length} Easy ·{' '}
              {panel.node.problems.filter((p) => p.difficulty === 'Medium').length} Medium ·{' '}
              {panel.node.problems.filter((p) => p.difficulty === 'Hard').length} Hard
            </p>
          </div>
        </div>
      )}
    </>
  );
}
