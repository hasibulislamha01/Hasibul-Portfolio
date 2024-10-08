import axios from "axios";

const AddNewProject = () => {

    const serverLink = import.meta.env.VITE_SERVER_LINK
    console.log(serverLink)

    const handleAddProject = (event) => {
        event.preventDefault()
        const form = event.target
        const projectName = form.name.value;
        const about = form.about.value;
        const image = form.image.value;
        const liveLink = form.live.value;
        const clientSide = form.client.value;
        const serverSide = form.server.value;
         
        const projectInfo = {
            projectName,
            about,
            image,
            liveLink,
            clientSide,
            serverSide
        }
        console.log(projectInfo)

        axios.post(`${serverLink}/projects`, projectInfo)
        .then(res=> console.log(res))
        .catch(err => console.error(err.message))
    }

    return (

        <form className="py-12 container mx-auto " onSubmit={handleAddProject}>

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Project name</span>
                </div>
                <input
                    name="name"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    required
                />
            </label>

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Describe the Project shortly</span>
                </div>
                <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Bio"
                    name="about"
                    required
                >
                </textarea>
            </label>

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">A reasonable image</span>
                </div>
                <input
                    name="image"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    required
                />
            </label>

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Live link</span>
                </div>
                <input
                    name="live"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    required
                />
            </label>

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Client side link</span>
                </div>
                <input
                    name="client"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    required
                />
            </label>

            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">Server side link</span>
                </div>
                <input
                    name="server"
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    required
                />
            </label>

            <button type="submit" className="my-10 btn bg-[#2f4f4f] text-white">Add Project</button>

        </form>

    );
};

export default AddNewProject;