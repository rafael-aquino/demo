import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Post } from './share/model/post';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const posts = [
      { id: 11, title: 'Dr Nice', content: 'lorem ipsum' },
      { id: 12, title: 'Narco', content: 'lorem ipsum'  },
      { id: 13, title: 'Bombasto', content: 'lorem ipsum'  },
      { id: 14, title: 'Celeritas', content: 'lorem ipsum'  },
      { id: 15, title: 'Magneta', content: 'lorem ipsum'  },
      { id: 16, title: 'RubberMan', content: 'lorem ipsum'  },
      { id: 17, title: 'Dynama',  content: 'lorem ipsum'  },
      { id: 18, title: 'Dr IQ',  content: 'lorem ipsum'  },
      { id: 19, title: 'Magma', content: 'lorem ipsum'  },
      { id: 20, title: 'Tornado', content: 'lorem ipsum'  }
    ];
    return {posts};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(posts: Post[]): number {
    return posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 11;
  }
}