import { GoDownload } from "react-icons/go";

const DownloadResume = () => {

    const handleDownload = () => {
        // Create an invisible anchor element
        const a = document.createElement('a');
        a.href = 'https://drive.google.com/uc?export=download&id=1EpWO-SRmOpquHqEtcYeKzikWqDnU-5O0'; 
        a.download = 'hasibul_Islam_Resume.pdf'; // The name of the file to be downloaded

        // Append the anchor to the body
        document.body.appendChild(a);

        // Programmatically click the anchor to trigger the download
        a.click();

        // Remove the anchor from the document
        document.body.removeChild(a);
    };


    return (

        <button
            onClick={handleDownload}
            id="downloadResume"
            className="bg-primary hover:bg-neutral hover:scale-95 text-white font-medium py-3 px-4 rounded flex items-center gap-3 mt-6 transition-all duration-200">
            <span>Download Resume</span> <GoDownload />
        </button>
    );
};

export default DownloadResume;