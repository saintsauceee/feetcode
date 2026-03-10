import RoadmapGraph from './components/RoadmapGraph';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="border-b border-zinc-100 sticky top-0 bg-white/95 backdrop-blur-sm z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-tight text-zinc-900">
              feetcode
            </span>
            <span className="text-xs text-zinc-400 border border-zinc-200 rounded px-1.5 py-0.5 font-medium">
              roadmap
            </span>
          </div>
          <p className="text-xs text-zinc-400 hidden sm:block">
            NeetCode 150 · Click a topic to see problems
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Title section */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-zinc-900 mb-2">
            Algorithm Roadmap
          </h1>
          <p className="text-sm text-zinc-500">
            A structured learning path for coding interviews. Topics are ordered
            by prerequisite — start from the top.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-5 mb-10 text-xs text-zinc-500">
          <span className="font-medium text-zinc-600">Difficulty:</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            Easy
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
            Medium
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
            Hard
          </span>
        </div>

        {/* Graph */}
        <div className="overflow-x-auto pb-8">
          <RoadmapGraph />
        </div>
      </main>
    </div>
  );
}
