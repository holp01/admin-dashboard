import React, { useState } from 'react';
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    DialogFooter,
    Input,
    Switch,
    Typography
} from '@material-tailwind/react';
import { createEvent } from '../../../services/apiService';

function EventCreateModal({ isOpen, onClose, onAdd }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [pointsReward, setPointsReward] = useState('');
    const [metersRequired, setMetersRequired] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [isActive, setActive] = useState(false);

    const handleSubmit = async () => {
        try {
            await createEvent({ name, description, pointsReward, metersRequired, startDate, endDate, isActive });
            onAdd();
            
            // Clear the fields
            setName('');
            setDescription('');
            setPointsReward('');
            setMetersRequired('');
            setStartDate('');
            setEndDate('');
            setActive(true);

            onClose();
        } catch (error) {
            console.error('Error creating new Event:', error);
        }
    };

    return (
        <Dialog open={isOpen} handler={onClose} className="bg-transparent shadow-none">
            <Card className="mx-auto w-full max-w-[30rem]">
                <CardHeader
                    variant="gradient"
                    color="blue"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Create New Event
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4">
                    <Input
                        type="text"
                        color="lightBlue"
                        size="lg"
                        outline={true}
                        label="Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Input
                        type="text"
                        color="lightBlue"
                        size="lg"
                        outline={true}
                        label="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <Input
                        type="number"
                        color="lightBlue"
                        size="lg"
                        outline={true}
                        label="Points Reward"
                        value={pointsReward}
                        onChange={e => setPointsReward(e.target.value)}
                    />
                    <Input
                        type="number"
                        color="lightBlue"
                        size="lg"
                        outline={true}
                        label="Meters Required"
                        value={metersRequired}
                        onChange={e => setMetersRequired(e.target.value)}
                    />
                    <Input
                        type="date"
                        color="lightBlue"
                        size="lg"
                        outline={true}
                        label="Start Date"
                        value={startDate}
                        onChange={e => setStartDate(e.target.value)}
                    />
                    <Input
                        type="date"
                        color="lightBlue"
                        size="lg"
                        outline={true}
                        label="End Date"
                        value={endDate}
                        onChange={e => setEndDate(e.target.value)}
                    />
                    <div className="-ml-2.5">
                        <Switch
                            label="Is Active?"
                            onChange={() => setActive(prev => !prev)}
                        />
                    </div>
                </CardBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={onClose}
                        className="mr-1"
                    >
                        Cancel
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleSubmit}>
                        Submit
                    </Button>
                </DialogFooter>
            </Card>
        </Dialog>
    );
}

export default EventCreateModal;
