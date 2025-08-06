import { useEffect, useRef, useState } from "react";

// import apiInstance from "@/helpers/api"
import toast from "react-hot-toast";
import FormControl from "./FormControl";

export default function SelectCoachOrganisation({ defaultValue, ...props }) {
  const [organisations, setOrganisations] = useState([]);
  const [filteredOrganisations, setFilteredOrganisations] = useState([]);
  const [loading, setLoading] = useState(false);
  const selectRef = useRef(null);

  async function retrieve() {
    try {
      setLoading(true);
      const response = await apiInstance.fetchOrganisations();
      if (response.data.success) {
        const coaches = defaultValue?.length > 0
          ? response?.data?.data?.coaches.filter(organisation => organisation._id === defaultValue)
          : response?.data?.data?.coaches;
        setOrganisations({ coaches });
        setFilteredOrganisations({ coaches });
      } else {
        throw new Error(response.message || "Please try again later!");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // retrieve();
  }, []);

  function filterCoaches(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = organisations?.coaches?.filter((coach) =>
      coach.name.toLowerCase().includes(searchTerm)
    );
    setFilteredOrganisations({ ...organisations, coaches: filtered });
    if (searchTerm && selectRef.current) {
      selectRef.current.size = Math.min(filtered.length, 5);
    } else if (selectRef.current) {
      selectRef.current.size = 1;
    }
  }

  if (loading) return <div>Retrieving coaches...</div>;

  return (
    <div>
      <label className="block mt-4">
        <span className="font-bold text-[14px] block mb-2">Sponsor By</span>
        <select
          ref={selectRef}
          name="sponsorBy"
          defaultValue={defaultValue}
          {...props}
          className="w-full px-4 py-2 rounded-md border-2 focus:outline-none cursor-pointer"
        >
          {(filteredOrganisations?.coaches || []).map((coach) => <option
            key={coach?._id}
            value={coach?._id}>
            {coach.name} - {coach.coachId}
          </option>)}
        </select>
      </label>
      <FormControl
        onChange={filterCoaches}
        placeholder="Type to search..."
      />
    </div>
  );
}