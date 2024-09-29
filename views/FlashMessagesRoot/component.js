import FlashMessage from './FlashMessage';
import useContainer from './hook';

const FlashMessagesRoot = () => {
  const { messages } = useContainer();

  return (
    <>
      {Object.keys(messages).map((key) => {
        const message = messages[key];

        return <FlashMessage {...message} key={message.id} />;
      })}
    </>
  );
};

export default FlashMessagesRoot;
