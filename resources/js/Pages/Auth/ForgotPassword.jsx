import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout props={[]}>
            <Head title="Forgot Password" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-2 lg:-mt-52">
            <div className='w-[500px] m-2 p-10 mx-auto rounded-md border-gray-200 border bg-white '>
            <div className='mb-10 text-center font-semibold'>Reset Your Password</div>
            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                Forgot your password? No problem. Just let us know your email address and we will email you a password
                reset link that will allow you to choose a new one.
            </div>
            {status && <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">{status}</div>}
            <form onSubmit={submit}>
                <TextInput
                    id="password"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" processing={processing}>
                        Email Password Reset Link
                    </PrimaryButton>
                </div>
            </form>
            </div>
            </div>
            </div>
        </GuestLayout>
    );
}
