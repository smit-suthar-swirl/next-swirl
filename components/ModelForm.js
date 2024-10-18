import Button from "./Button";

const ModelForm = () => {
    return (
        <div id="form-content2" className="p-10">
            <form action="" method="post" className="space-y-5">
                <input className="text-center w-full py-4 px-5" type="email" id="company-mail" name="mail" placeholder="company's mail" />
                <div className="flex gap-x-5">
                    <input className="text-center w-1/2 py-4 px-5" type="text" id="name" name="name" placeholder="Name" required />
                    <input className="text-center w-full py-4 px-5" type="text" id="brand-name" name="brandname" placeholder="Brand Name" required />
                </div>
                <div className="flex gap-x-5">
                    <input className="w-1/4 py-4 px-5" type="text" id="country-code" name="countrycode" placeholder="+91" />
                    <input className="w-full py-4 px-5" type="text" id="tablet-number" name="mobilenumber" placeholder="Phone number" required />
                </div>
                <Button text='Submit' btn_variant='secondary_btn' width='w-full' />
            </form>
        </div>
    )
}
export default ModelForm;
