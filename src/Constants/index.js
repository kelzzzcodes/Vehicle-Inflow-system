import {BsChatSquare,BsPerson} from 'react-icons/bs'
import {AiOutlineEdit} from 'react-icons/ai'
import {RiDeleteBin2Line} from 'react-icons/ri'
import {MdLaunch} from 'react-icons/md'
import {PiShieldCheckThin} from 'react-icons/pi'


export const sidebarHero=[
    {
        chatIcon: <BsChatSquare />,
        text: 'New Chat',
        editIcon: <AiOutlineEdit />,
        deleteIcon: <RiDeleteBin2Line />,
        message: 'New Chat',
    },
      {
        chatIcon: <BsChatSquare />,
        text: 'What is Marketing',
        editIcon: <AiOutlineEdit />,
        deleteIcon: <RiDeleteBin2Line />,
        message: 'What is Marketing'
    },
      {
        chatIcon: <BsChatSquare />,
        text: 'Give me a list of..',
        editIcon: <AiOutlineEdit />,
        deleteIcon: <RiDeleteBin2Line />,
        message: 'Give me a list of marketing agencies near me in 5km'
    },

]

export const sidebarFooter=[
    {
        Icon: <BsPerson />,
        text: 'Upgrade to Plus',

    },
     {
        Icon: <MdLaunch />,
        text: 'Updates & FAQ',
    },
        {
        Icon: <BsPerson />,
        text: 'Terms and Conditions',
    },
         {
        Icon: <PiShieldCheckThin />,
        text: 'Privacy Policy Page',
    },


]