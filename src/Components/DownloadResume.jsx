import { GoDownload } from "react-icons/go";

const DownloadResume = () => {

    const handleDownload = () => {
        // Create an invisible anchor element
        const a = document.createElement('a');
        a.href = 'https://drive.google.com/uc?export=download&id=1apHCSsaI18_UHtlYHRk2eyv9st7_GnyL'; // Replace with the actual path to your resume
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
            className="bg-[#2f4f4f] hover:bg-[#333333] text-white font-medium py-2 px-4 rounded flex items-center gap-3">
            <span>Download Resume</span> <GoDownload />
        </button>
    );
};

export default DownloadResume;