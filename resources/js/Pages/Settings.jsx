import ApplicationLogo from '@/Components/ApplicationLogo';
import InputLabel from '@/Components/InputLabel';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Select from 'react-select';
import { useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Settings(props) {
    const category = [
        { value: 'newsapi', label: 'NewsAPI - Default' },
        { value: 'TheGuardian', label: 'The-Guardian News API' },
        { value: 'newscred', label: 'NewsCred' }
    ];

    const interest = [
        { value: 'Business', label: 'Business' },
        { value: 'Entertainment', label: 'Entertainment' },
        { value: 'Health', label: 'Health' },
        { value: 'Science', label: 'Science' },
        { value: 'Sports', label: 'Sports' },
        { value: 'General', label: 'General' },
    ];

    const { data, setData, post, processing, errors, reset } = useForm({
        source: props.settings.default_channel,
        interests: props.settings.interests
    });

    const onSourceChange = (event) => {
        setData('source',event.value);
    };

    const onIntrestsChage = (event) => {
        if(event && event.length > 0){
            let interests = event.filter((eachinterest) => (eachinterest.value != ""));
            setData('interests',interests);
        }else{
            setData('interests','');
        }
    };

    const submit = async (e) => {
        post(route('settings.store'))
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">News Preferences</h2>}
        >
            <Head title="User Setting" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="overflow-visible bg-slate-400 dark:bg-gray-800  grid lg:grid-flow-col lg:grid-cols-6 sm:grid-flow-row sm:grid-rows-1">
                        <div className="p-6 text-gray-900 dark:text-gray-100 col-span-3 bg-white/50">
                            <img
                            className=""
                            src="assets/homepage.png"
                            alt="NewsApp"
                            />
                        </div>
                        <div className="text-gray-900 dark:text-gray-100 col-span-3 bg-white shadow-lg z-0">
                            <div className='bg-slate-400 p-4 text-xl'>Customize your news feed</div>
                            <div className='p-8'>
                                <InputLabel className={"text-xs m-1 text-gray-400"}>News Source</InputLabel>
                                { errors.source != "" && <span className='text-sm text-red-600 transition-all delay-100'>{errors.source}</span>}
                                <Select className='mb-4' options={category} defaultValue={category.filter((each) => (each.value == props.settings.default_channel))} onChange={ (e) => onSourceChange(e) } />

                                <InputLabel className={"text-xs m-1 text-gray-400"}>Interested In</InputLabel>
                                { errors.interests != "" && <span className='text-sm text-red-600 transition-all delay-100'>{errors.interests}</span>}
                                <Select isMulti={true} className='mb-4' defaultValue={props.settings.interests} options={interest} onChange={ (e) => onIntrestsChage(e) } />

                                <div className='grid grid-flow-col gap-2'>
                                <PrimaryButton processing={processing} className={"bg-white place-content-center normal-case"} onClick={(e) => submit(e) }>Save and back to news</PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
