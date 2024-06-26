export default function Blocks() {
  // For each column, define each block and the delay to animate.
  const columns = [
    [0, 0.6, 1.2],
    [0.1, 0.7, 1.3, 1.9],
    [0.2, 0.8, 1.4, 2, 2.6],
    [0.3, 0.9, 1.5],
    [0.4, 1, 1.6, 2.2, 2.8, 3.5],
    [0.5, 1.1, 1.7, 2.3, 2.9, 3.6, 4],
  ];

  // Build a column of blocks, animate each block into the correct position and opacity.
  const buildColumn = (col) => {
    return col.map((block, blockIndex) => {
      return (
        <div key={blockIndex}>
          <span
            className="bg-white block h-2 w-6 md:w-12 opacity-0 animated-block"
            style={{ animationDelay: `${block * 2 + 1}s` }}
          ></span>
        </div>
      );
    });
  };

  return (
    <div className="absolute bottom-0 right-0 md:p-10 text-white pointer-events-none flex gap-3 opacity-10">
      {columns.map((colBlocks, colIndex) => {
        return (
          <div key={colIndex} className="flex flex-col gap-2 mt-auto">
            {buildColumn(colBlocks.reverse())}
          </div>
        );
      })}
    </div>
  );
}
