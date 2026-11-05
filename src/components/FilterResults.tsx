export default function FilterResults({ count, item, plural = `${item}s`, onClear }: {
  count: number;
  item: string;
  plural?: string;
  onClear?: () => void;
}) {
  return (
    <div className="filter-results">
      <p className="subtle-copy" role="status">
        {count} {count === 1 ? item : plural}
      </p>
      {onClear && <button className="text-link" type="button" onClick={onClear}>Clear filters</button>}
    </div>
  );
}
