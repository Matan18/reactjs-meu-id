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

export type ThemeOptions = 'white' | 'regular' | 'white-borderless';

export type IMeuIdButton = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick'
> & {
  children?: React.ReactNode;

  appId: string;

  targetName?: string;

  windowStyle?: WindowStyle;
  /**
   * Opção de cor padrão do botão.
   * **OBS:** Desativado quando possui className
   */
  theme?: ThemeOptions;
  /**
   * Opção de tamanho padrão do botão
   * **Desativado quando possui className**
   */
  size?: 'small' | 'large';
  /**
   * Texto para substituir mensagem padrão no botão
   */
  text?: string;
  /*
   * Ativando essa opção, o ícone da MeuID vai se manter
   * **OBS:** Cores desativadas quando possui className
   */
  preseveIcon?: true;
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
  onMessage?: (data: unknown) => void;
};
