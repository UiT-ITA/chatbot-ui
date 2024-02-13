import React, { useEffect, useState } from 'react';
import { IconExternalLink } from '@tabler/icons-react';

const SplashScreen = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const shouldShowPopup = localStorage.getItem('shouldShowPopup');
    if (shouldShowPopup === null || shouldShowPopup === 'true') {
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('shouldShowPopup', String(!e.target.checked));
  };
  

  if (!showPopup) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 max-w-lg w-full mx-auto dark:bg-[#202123]">
        <div className="text-lg pb-4 font-bold text-black dark:text-neutral-200">
          ChatUiT
        </div>
        <div className="text-sm mb-2 text-neutral-700 dark:text-neutral-200">
        ChatUiT is based on GPT-4 and GPT-3.5-turbo, which is the same model used in the free version of ChatGPT.
        In our version of the service, no data is stored outside your machine.
        Chat logs are stored in your browser and will only be available on your device.
        Data is not shared or used for training the model. 
        ChatUiT is approved for up to red data
        <br></br>
        <br></br>
        <a
          href="https://uit.topdesk.net/tas/public/ssp/content/detail/service?unid=5a3379b4e20e4a72bd4903f58e214ca1&from=8acda9fd-7dd9-4914-8cc2-d2cf5f5a5a26"
          target="_blank"
          className="flex items-center"
        >
          <IconExternalLink size={18} className={'inline mr-1'} />
          Read more here</a>
        </div>
        <br></br>
        <label className="w-full cursor-pointer bg-transparent p-2 text-neutral-700 dark:text-neutral-200">
          <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
          {"Do not show this again"}
        </label>
        <button
          type="button"
          className="w-full px-4 py-2 mt-6 border rounded-lg shadow border-neutral-500 text-neutral-900 hover:bg-neutral-100 focus:outline-none dark:border-neutral-800 dark:border-opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-300"
          onClick={handleClosePopup}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
