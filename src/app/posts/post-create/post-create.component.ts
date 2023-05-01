import { Component } from "@angular/core";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: [] 
})

export class PostCreateComponent {

    newPost= 'Create a post...';

  onAddPost(postInput: HTMLTextAreaElement) {
    console.dir(postInput)
    this.newPost = postInput.value
  }
}

