import React from 'react';
import { ThemeOptions } from '../../types';
import styles from './styles.module.css';

type MeuIdIconProps = {
  theme?: ThemeOptions;
};

export const MeuIdIcon = ({ theme }: MeuIdIconProps): JSX.Element => (
  <svg
    className={[styles.container, styles[theme || '']].join(' ')}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.27371 0.00085166C1.50133 -0.0106498 1.77459 0.0943763 1.99673 0.313811C2.56974 0.880408 3.14517 1.44458 3.70448 2.0245C4.13781 2.47426 4.11499 3.14437 3.67679 3.59838C3.26598 4.02211 2.55726 4.09112 2.1215 3.68918C1.48429 3.10048 0.869288 2.48637 0.276201 1.85409C-0.0360138 1.52116 -0.0770946 1.09742 0.120398 0.675804C0.329455 0.227248 0.686099 0.00085166 1.27371 0.00085166Z"
      fill="white"
    />
    <path
      d="M22.7621 0.00486369C23.3099 0.00486369 23.7164 0.258803 23.8951 0.705845C24.0776 1.16166 24.0067 1.57874 23.6516 1.93287C23.0908 2.4928 22.5345 3.05789 21.9636 3.60784C21.4892 4.06517 20.8237 4.06184 20.3563 3.62297C19.898 3.19227 19.8524 2.49946 20.2979 2.02246C20.8551 1.42529 21.4436 0.856574 22.0272 0.284227C22.1227 0.188397 22.2377 0.113915 22.3644 0.065743C22.4911 0.0175712 22.6267 -0.00318283 22.7621 0.00486369Z"
      fill="white"
    />
    <path
      d="M1.25699 24.0001C0.695554 23.9977 0.351386 23.7819 0.139591 23.3769C-0.0749426 22.9665 -0.026254 22.5639 0.242446 22.1883C0.285622 22.1278 0.333765 22.071 0.386381 22.0185C0.921346 21.4846 1.45144 20.9443 1.99615 20.4207C2.46629 19.9694 3.06669 19.9328 3.55357 20.2996C4.09462 20.7067 4.17983 21.4779 3.71211 21.9661C3.14672 22.5567 2.5588 23.1263 1.98032 23.7047C1.88627 23.8002 1.77362 23.8757 1.64926 23.9265C1.52489 23.9773 1.39142 24.0023 1.25699 24.0001Z"
      fill="white"
    />
    <path
      d="M22.7262 23.9985C22.4755 24.0079 22.2049 23.8989 21.9837 23.6792C21.4302 23.1295 20.8657 22.5896 20.3341 22.0203C19.695 21.3341 19.9994 20.3162 20.8928 20.0901C21.2701 19.9945 21.6198 20.0677 21.897 20.3341C22.5126 20.9261 23.1224 21.5254 23.7134 22.1413C24.0481 22.4906 24.0752 22.9204 23.8698 23.3478C23.6571 23.7906 23.2877 24.0061 22.7262 23.9985Z"
      fill="white"
    />
    <path
      d="M10.2622 16.4892V7.07833C10.2622 6.62675 10.5057 6.36646 10.9779 6.36646H13.874C17.5049 6.36646 19.5824 8.55415 19.5824 11.7661C19.5824 14.9441 17.4176 17.2011 13.874 17.2011H10.9779C10.5078 17.2011 10.2622 16.9408 10.2622 16.4892ZM13.8563 14.6659C15.6545 14.6659 16.7719 13.6762 16.7719 11.7661C16.7719 9.87379 15.7068 8.90131 13.874 8.90131H13.0378V14.6659H13.8563Z"
      fill="white"
    />
    <path
      d="M8.28008 11.9866C8.17662 11.5816 7.91096 11.3661 7.49072 11.3464C7.23617 11.3325 6.981 11.3339 6.72661 11.3504C6.31732 11.3806 6.01302 11.6642 5.95155 12.0744C5.93779 12.1848 5.9325 12.2961 5.93573 12.4073V12.4678C5.93573 12.5707 5.93573 12.6467 5.93573 12.7018C5.93573 12.7018 5.93573 12.7033 5.93573 12.7039V14.6943C5.93573 14.8418 5.93573 14.9894 5.93573 15.1371C5.9339 15.4909 5.93238 15.8565 5.94121 16.2173C5.9549 16.7769 6.25859 17.0993 6.81912 17.1489C6.9235 17.1583 7.03 17.1628 7.13742 17.1628C7.23886 17.1628 7.34029 17.1588 7.44172 17.1507C7.93896 17.1108 8.23291 16.8408 8.31264 16.3474C8.33056 16.2289 8.3389 16.1092 8.3376 15.9894V15.2796C8.3376 14.1401 8.3376 14.0535 8.3376 12.4663C8.33831 12.3047 8.319 12.1435 8.28008 11.9866Z"
      fill="white"
    />
    <path
      d="M7.11869 9.02055C7.14273 9.02206 7.16677 9.02267 7.19081 9.02267C7.51044 9.02111 7.81728 8.89761 8.04803 8.67762C8.32191 8.42066 8.48836 8.05503 8.48897 7.6997C8.48897 6.97057 7.87002 6.35282 7.13482 6.3507H7.13117C6.95331 6.34735 6.77656 6.37919 6.61118 6.44437C6.44581 6.50956 6.29511 6.60679 6.16785 6.73042C6.04058 6.85404 5.9393 7.00159 5.86987 7.16449C5.80045 7.3274 5.76427 7.5024 5.76344 7.67933C5.76262 7.85626 5.79715 8.03159 5.86505 8.19513C5.93295 8.35867 6.03286 8.50715 6.15896 8.63195C6.28506 8.75674 6.43484 8.85536 6.5996 8.92207C6.76436 8.98879 6.94081 9.02226 7.11869 9.02055Z"
      fill="white"
    />
  </svg>
);
