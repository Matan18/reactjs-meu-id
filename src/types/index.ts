export type WindowSize = {
  width?: number;
  height?: number;
};

export type MeuIdFinishKey = 'meuidlogin:finish';
export type MeuIdLoadKey = 'meuidlogin:load';
export type MeuIdStartKey = 'meuidlogin:start';

export type MessageOptions = MeuIdFinishKey | MeuIdLoadKey;

export type WindowStyle = WindowSize & { text?: string };

export type GetSize = (data: WindowSize) => string;

export type IFinishData = {
  message: MeuIdFinishKey;
  payload: {
    auth: {
      parameters: {
        code: string;
        code_verifier: string;
      };
      url: string;
    };
    data: string;
  };
};

export type ILoadData = {
  message: MeuIdLoadKey;
  payload: unknown;
};

export type MessageDate = IFinishData | ILoadData;

export type MessageHandler = {
  'meuidlogin:finish': (finish: IFinishData) => void;
  'meuidlogin:load': (load: ILoadData) => void;
};

export type IMeuIdButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;

  appId: string;

  targetName?: string;

  windowStyle?: WindowStyle;

  /**
   * Função chamada após a validação do usuário,
   *  enviando os dados vindos do popup
   */
  onFinish?: (finishData: IFinishData) => void;
  /**
   * Função chamada assim que o popup é carregado por completo
   */
  onLoad?: (data: ILoadData) => void;
  /**
   * Função chamada após receber algum postMessage que não se encaixe no onFinish, ou no onLoad
   */
  onError?: (data: unknown) => void;
};
