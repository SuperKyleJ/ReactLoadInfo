import { Button, DisplayRoot, Text, Card, LoadingSpinner } from "mrbd-ui-kit";
import { getSheetData } from "../Services/GoogleSheet";
import { useEffect, useState } from "react";
function LoadCards() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sheetData = async () => {
      try {
        const data = await getSheetData();
        setItems(data);
      } catch (error) {
        console.log("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    sheetData();
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      <Card>Trailer Number:{items.trailerNumber}</Card>
      <Card>Load Number: {items.loadNumber}</Card>
      <Card>Dock Number: {items.dockNumber}</Card>
    </div>
  );
}

export default LoadCards;
