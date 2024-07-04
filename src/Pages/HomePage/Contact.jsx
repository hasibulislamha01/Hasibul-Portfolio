import Lottie from "lottie-react";
import envelopAnimation from '../../assets/envelop.json'

const Contact = () => {
    return (
        <div className="my-12">
            <div className="flex flex-col lg:flex-row items-center justify-evenly">
                <div className="space-y-4">

                    <h1 className="text-3xl text-left mb-6">Reach Me</h1>

                    <div className="flex items-center gap-2 bg-[#e7e5e4] py-4 px-10 rounded-md">
                        <img className="h-[27px]" src="https://i.ibb.co/kDVmNb4/icons8-gmail-48.png" alt="gmail" />
                        <h3 className="text-lg">hasibulislamha01@gmail.com</h3>
                    </div>

                    <div className="flex items-center gap-2 bg-[#e7e5e4] py-4 px-10 rounded-md">
                        <img className="h-[30px]" src="https://i.ibb.co/wc3LNNP/icons8-linked-in-48.png" alt="gmail" />
                        <a className="text-lg" href="https://www.linkedin.com/in/hasibul--islam/">Hasibul Islam</a>
                    </div>

                    <div className="flex items-center gap-2 bg-[#e7e5e4] py-4 px-10 rounded-md">
                        <img className="h-[30px]" src="https://i.ibb.co/y00d9WJ/icons8-facebook-48-2.png" alt="gmail" />
                        <a className="text-lg" href="https://www.facebook.com/profile.php?id=100024664308783">Hasibul Islam</a>
                    </div>

                    <div className="flex items-center gap-2 bg-[#e7e5e4] py-4 px-10 rounded-md">
                        <img className="h-[30px]" src="https://i.ibb.co/0Fx0srz/icons8-phone-48.png" alt="gmail" />
                        <h3 className="text-lg">+8801754855810</h3>
                    </div>

                </div>
                <Lottie
                    className="w-1/2"
                    animationData={envelopAnimation}
                    loop={true}
                />
            </div>
        </div>
    );
};

export default Contact;