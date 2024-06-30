export type command = {
    type: string;
    id: string;
    startPoint: {x: number, y:number};
    controlPoints?: Array<{key: string, value: number}>;
    endPoint: {x: number, y:number};
  };