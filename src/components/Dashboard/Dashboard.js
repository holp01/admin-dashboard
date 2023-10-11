import React from 'react';
import { useAuth } from '../../App';
import { useNavigate } from 'react-router-dom';

import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

import Users from './Users';
import Partners from './Partners';
import Events from './Events';

function Dashboard() {
    const [selected, setSelected] = React.useState(1);
    const [content, setContent] = React.useState("users"); // To hold the current content

    const setSelectedItem = (value) => {
        setSelected(value);
        switch (value) {
            case 1:
                setContent("users");
                break;
            case 2:
                setContent("partners");
                break;
            case 3:
                setContent("events");
                break;
            default:
                setContent("dashboard");
        }
    };

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="flex">
            <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                <div className="mb-2 p-4">
                    <Typography variant="h5" color="blue-gray">
                        Bike Lane App
                    </Typography>
                </div>
                <List>
                    <ListItem selected={selected === 1} onClick={() => setSelectedItem(1)}>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Users
                    </ListItem>
                    <ListItem selected={selected === 2} onClick={() => setSelectedItem(2)}>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Partners
                    </ListItem>
                    <ListItem selected={selected === 3} onClick={() => setSelectedItem(3)}>
                        <ListItemPrefix>
                            <Cog6ToothIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Events
                    </ListItem>
                    <ListItem onClick={(handleLogout)}>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </List>
            </Card>

            {/* Main Content Area */}
            <div className="flex-1 p-6 bg-gray-200">
                {content === "users" && <Users />}
                {content === "partners" && <Partners />}
                {content === "events" && <Events />}
            </div>
        </div>
    );
}

export default Dashboard;
