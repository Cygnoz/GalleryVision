import axios from "axios";
import { useEffect, useState } from "react";
import { Close } from "../icons/icon";

type Music = {
  _id: string;
  licensorId: string;
  musicId: string;
  licensorName: string;
  musicName: string;
  musicEmail: string;
  commission: string;
  musicLogo: string;
};

type Props = {
  onClose: () => void;
  music: Music;
};
type Licensor = {
  _id: string;
  licensorName: string;
};

const EditMusic = ({ onClose, music }: Props) => {
  const [licensors, setLicensors] = useState<Licensor[]>([]);
  const [formData, setFormData] = useState<Music>(music);
  const [updatedData, setUpdatedData] = useState<Partial<Music>>({});
  useEffect(() => {
    const getLicensorName = async () => {
      try {
        const response = await axios.get("http://localhost:3000/get-licensor");
        setLicensors(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getLicensorName();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };
  console.log(music);

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3001/update-music/${formData._id}`,
        formData
      );
      console.log(response.data); // Log the response if needed
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error("Error updating music data:", error);
    }
  };
  const handleLicensorChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLicensor = licensors.find(
      (licensor) => licensor.licensorName === event.target.value
    );
    if (selectedLicensor) {
      setFormData((prevData) => ({
        ...prevData,
        licensorName: selectedLicensor.licensorName,
        licensorId: selectedLicensor._id,
      }));
    }
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        channelLogo: reader.result ? reader.result.toString() : "",
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="px-8 py-8 w-[823px] h-[612px]">
      <div className="flex justify-between">
        <p className="text-2xl font-bold">Edit music details</p>
        <button onClick={onClose}>
          <Close />
        </button>
      </div>
      <div className="mt-5">
        <div>
          <p>Edit music logo</p>
          <div className="bg-slate-100 px-4 py-6 w-[723px] h-[184px] rounded-2xl">
            <div className="flex flex-col gap-3 items-center justify-center bg-white w[100%] h-[100%] border-2 border-green-200 border-dashed rounded-2xl">
              <div>logo</div>
              <div className="text-sm font-medium">
                Drop your logo here, or{" "}
                <label className="cursor-pointer text-blue-500">
                  browse
                  <input
                    type="file"
                    accept="image/jpg, image/png"
                    name="channelLogo"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
              <div className="text-xs">Supports, JPG, PNG</div>{" "}
              {formData.musicLogo && (
                <div className="w-16 h-16">
                  <img
                    src={formData.musicLogo}
                    alt="Company Logo"
                    className="max-w-full h-auto rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className=" py-6 flex justify-between">
          <div className="flex flex-col gap-4">
            <label htmlFor="licensor">Select licensor</label>
            <select
              name="licensorName"
              onChange={handleLicensorChange}
              className="px-3 py-3 w-[225px] border border-gray-200 rounded-lg"
              value={formData.licensorName || updatedData.licensorName}
            >
              <option value="">Select Licensor</option>
              {licensors.map((licensor, index) => (
                <option key={index} value={licensor.licensorName}>
                  {licensor.licensorName}
                </option>
              ))}
            </select>
          </div>
          {/* Music ID */}
          <div className="flex flex-col gap-4">
            <label htmlFor="musicId">Music ID</label>
            <input
              type="text"
              id="licensorId"
              name="licensorId"
              onChange={handleChange}
              placeholder={music.musicId}
              className="px-3 py-3 w-[225px] border border-gray-200 rounded-lg"
            />
          </div>
          {/* Music name */}
          <div className="flex flex-col gap-4">
            <label htmlFor="musicName">Music name</label>
            <input
              type="text"
              id="licensorName"
              name="licensorName"
              onChange={handleChange}
              placeholder={`${music.licensorName}`}
              className="px-3 py-3 w-[225px] border border-gray-200 rounded-lg"
            />
          </div>
        </div>
        {/* Email and Commission */}
        <div className="flex justify-between">
          {/* Email */}
          <div className="flex flex-col gap-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="licensorEmail"
              name="licensorEmail"
              onChange={handleChange}
              placeholder={formData.musicEmail}
              className="px-3 py-3 w-[358px] border border-gray-200 rounded-lg"
            />
          </div>
          {/* Commission */}
          <div className="flex flex-col gap-4">
            <label htmlFor="commission">Commission (%)</label>
            <input
              type="number"
              id="commision"
              name="commission"
              onChange={handleChange}
              placeholder={formData.commission}
              className="px-3 py-3 w-[358px] border border-gray-200 rounded-lg"
            />
          </div>
        </div>
        {/* Save Button */}
        <div className="flex justify-end pt-5">
          <button
            onClick={handleSubmit}
            className=" bg-black text-white font-bold px-2 py-2 rounded-lg"
          >
            Add & Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditMusic;
