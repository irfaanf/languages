import { Dropdown } from '../atoms/Dropdown/Dropdown';
import { Label } from '../atoms/Label';

export const CaptureWord = () => {
    return (
        <div className="md:container md:mx-auto">
            <div className="grid grid-rows-1 grid-cols-12">
                <div className="col-span-2 flex items-center">
                    <Label />
                </div>
                <div className="col-span-4 flex align-middle">
                    <Dropdown />
                </div>
            </div>
        </div>
    );
};
