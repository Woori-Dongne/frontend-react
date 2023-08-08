import { ReactNode, createContext, useState } from 'react';

const RoomTitleContext = createContext({
  roomInfo: { title: '', roomName: '' },
  handleRoomInfo: (title: string, roomName: string) => {},
});

interface Props {
  children: ReactNode;
}

const ChatProvider = ({ children }: Props) => {
  const [roomInfo, setRoomInfo] = useState({ title: '', roomName: '' });

  const handleRoomInfo = (title: string, roomName: string): void => {
    setRoomInfo({ title, roomName });
  };

  return (
    <RoomTitleContext.Provider
      value={{
        roomInfo,
        handleRoomInfo,
      }}
    >
      {children}
    </RoomTitleContext.Provider>
  );
};

export { ChatProvider, RoomTitleContext };
