type Props = {
    firstName: string;
    lastName: string;
};

export default function Avatar({firstName, lastName}: Props) {
    const initials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();

    return (
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white">
            {initials}
        </div>
    );
}