export interface Post {
    id: string;
    slug: string;
    body: string;
    data: {
      title: string;
      date: Date;
      description: string;
      tags: string[];
      image: string[];
      draft: boolean;
    };
  }