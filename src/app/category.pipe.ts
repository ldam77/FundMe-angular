import {Pipe, PipeTransform} from '@angular/core';
import {Project} from './project.model';

@Pipe({
  name: "category",
  pure: false
})

export class CategoryPipe implements PipeTransform {
  transform(input: Project[], desiredCategory){
    var output: Project[] = [];
    // if (!input || !input.length) return [];
    if (desiredCategory === "allProjects") return input;
    for (var i = 0; i < input.length; i++) {
      if (input[i].category === desiredCategory) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
