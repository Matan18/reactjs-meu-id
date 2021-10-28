import React from 'react';
import {
  GetSize,
  IFinishData,
  ILoadData,
  IMeuIdButton,
  MessageHandler,
  MessageOptions,
} from '../types';

const POPUP_URL = 'https://login.meuid.com.br';
// const PUSHER_KEY = 'baf85c41e15d6a11b1ee';

const WINDOWS_DEFAULTS_Target = 'PopUpMeuId';

const getSize: GetSize = ({ width = 520, height = 705 }) => {
  const {
    screen: { width: screenWidth, height: screenHeight, availWidth },
    screenLeft,
    screenTop,
    screenX,
    screenY,
    innerWidth,
    innerHeight,
    document: {
      documentElement: { clientWidth, clientHeight },
    },
  } = window;
  const baseLeft = screenLeft !== 0 ? screenLeft : screenX;
  const baseTop = screenTop !== 0 ? screenTop : screenY;
  const maxWidth = innerWidth || clientWidth || screenWidth;
  const divider = innerHeight || clientHeight || screenHeight;
  const maxHeight = maxWidth / availWidth;
  const left = (maxWidth - width) / 2 / divider + baseLeft;
  const top = (maxHeight - height) / 2 / divider + baseTop;

  const stylesText = `width=${width}px,height=${height}px,top=${top}, left=${left}`;
  return stylesText;
};

export function MeuIdButton({
  children,
  // pusher_key = PUSHER_KEY,
  targetName = WINDOWS_DEFAULTS_Target,
  appId = '4a33541c-0465-4d6d-8744-c42f217807c4',
  windowStyle,
  style,
  className,
  onFinish,
  onError,
  onLoad,
  ...rest
}: IMeuIdButton): JSX.Element {
  const handleClick = () => {
    const styleText =
      windowStyle?.text ??
      getSize({ width: windowStyle?.width, height: windowStyle?.height });

    const dataWindow = window.open(POPUP_URL, targetName, styleText);

    const messageHandler: MessageHandler = {
      'meuidlogin:finish': finish => {
        dataWindow?.close();
        if (onFinish) onFinish(finish);
      },
      'meuidlogin:load': load => {
        const StartKeyword = 'meuidlogin:start';
        dataWindow?.postMessage(
          {
            message: StartKeyword,
            payload: { appId },
          },
          '*',
        );
        if (onLoad) onLoad(load);
      },
    };

    window.addEventListener('message', event => {
      const { data } = event as { data: { message: MessageOptions } & unknown };
      if (data.message === 'meuidlogin:finish') {
        messageHandler['meuidlogin:finish'](data as IFinishData);
        return;
      }
      if (data.message === 'meuidlogin:load') {
        messageHandler[data.message](data as ILoadData);
        return;
      }
      if (onError) onError(event);
    });
  };
  return (
    <button
      type="button"
      style={style}
      onClick={handleClick}
      className={[className].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}
