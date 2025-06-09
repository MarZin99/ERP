import { useEffect, useState } from "react";
import { fetchPositions } from "../_services/position.service";
import type { Position } from "../models/PositionForm.types";

export const usePositions = () => {
    const [positions, setPositions] = useState<Position[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchPositions();
        setPositions(data);
      } catch (err) {
          setError("Cannot get employees data:" + err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
    return { positions, loading, error };
}