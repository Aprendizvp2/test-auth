export interface NewspaperResponseEntity {
  lccn: string;
  url: string;
  state: string;
  title: string;
}

export interface NewspaperEntity {
  newspapers: NewspaperResponseEntity[];
}
