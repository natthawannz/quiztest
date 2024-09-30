// components/RecordList.js
const RecordList = ({ records }) => {
    return (
      <div className="mt-4 p-4 border rounded-md shadow-md">
        <h2 className="text-xl font-bold">Records</h2>
        <ul className="space-y-2">
          {records.map((record, index) => (
            <li key={index} className="flex justify-between border-b py-2">
              <span>
                {new Date(record.date).toLocaleDateString()}: {record.notes} - ${record.amount} ({record.type})
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RecordList;
  