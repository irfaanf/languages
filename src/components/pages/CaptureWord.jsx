import { Dropdown } from '../atoms/Dropdown/Dropdown';
import { InputBox } from '../atoms/InputBox';
import { InputNumber } from '../atoms/InputNumber';
import { Label } from '../atoms/Label';
import { TextArea } from '../atoms/TextArea';

export const CaptureWord = () => {
    return (
        <div className="md:container md:mx-auto">
            <div className="grid grid-rows-7 grid-cols-12 gap-2">
                <div className="col-span-1 flex items-center">
                    <Label>Book</Label>
                </div>
                <div className="col-span-6 flex items-center">
                    <Dropdown
                        options={['Die Poort', 'The Hunger Games', 'Bu Ulke']}
                    />
                </div>
                <div className="col-span-5"></div>

                <div className="col-span-1 flex items-center">
                    <Label>Page</Label>
                </div>
                <div className="col-span-1 flex items-center">
                    <InputNumber id="page-number-input" />
                </div>
                <div className="col-span-1 flex items-center">
                    <Label>Line</Label>
                </div>
                <div className="col-span-1 flex items-center">
                    <InputNumber id="line-number-input" />
                </div>
                <div className="col-span-8 flex items-center"></div>

                <div className="col-span-1 flex items-center">
                    <Label>Source</Label>
                </div>
                <div className="col-span-1 flex items-center">
                    <Dropdown options={['AFR', 'TUR', 'ITA']} />
                </div>
                <div className="col-span-5 flex items-center">
                    <InputBox />
                </div>
                <div className="col-span-5"></div>

                <div className="col-span-1 flex items-center">
                    <Label>Target</Label>
                </div>
                <div className="col-span-1 flex items-center">
                    <Dropdown options={['AFR', 'TUR', 'ITA']} />
                </div>
                <div className="col-span-5 flex items-center">
                    <InputBox />
                </div>
                <div className="col-span-5"></div>

                <div className="col-span-1 flex items-center">
                    <Label>Synonym</Label>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-5 flex items-center">
                    <InputBox />
                </div>
                <div className="col-span-5"></div>

                <div className="col-span-1 flex items-center">
                    <Label>Excerpt</Label>
                </div>
                <div className="col-span-6 flex items-center">
                    <TextArea />
                </div>
                <div className="col-span-5"></div>

                <div className="col-span-1"></div>
                <div className="col-span-1 flex items-center">
                    <button
                        type="button"
                        className="bg-cyan-200 py-2 px-8 rounded"
                    >
                        Capture
                    </button>
                </div>
            </div>
        </div>
    );
};
