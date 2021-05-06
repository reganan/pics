export interface sendPVPageProps {
  pageName: string;
  pageUrl: string;
  isonepage?: boolean;
  spmUrl?: string;
  referrer?: string;
  spmA: string;
  spmB: string;
}

export interface sendAplusProps {
  logkey: string;
  gmkey?: 'CLK' | 'EXP' | 'OTHER';
  gokey?: any;
  method?: string;
}
