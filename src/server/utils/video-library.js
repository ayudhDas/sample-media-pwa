/**
 *
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const fs = require('fs');

class VideoLibrary {
  static load (path) {
    return JSON.parse(fs.readFileSync(path, 'utf-8'));
  }

  static find (library, path) {
    let items = library;
    let title;

    for (let p = 0; p < path.length; p++) {
      const item = items.find(i => {
        console.log(p, i.slug, path[p]);
        return i.slug === path[p];
      });

      if (!item) {
        return {
          items: []
        };
      }

      title = item.title;
      items = item.episodes || item;
    }

    return {
      title,
      items
    };
  }
}

module.exports = VideoLibrary;
