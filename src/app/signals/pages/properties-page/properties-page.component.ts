import { Component, computed, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.scss'],
})
export class PropertiesPageComponent {
  public fullName = computed(
    () => `${this.user().first_name} ${this.user().last_name}`
  );
  user = signal({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  onFieldUpdated(field: keyof User, value: string) {
    // first way
    /* this.user.set({
      ...this.user(),
      [field]: value,
    }); */

    // second way
    /* this.user.update(current => ({
      ...current,
      [field]: value
    })) */

    // third way
    this.user.update((current) => {
      switch (field) {
        case 'email':
          current.email = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'id':
          current.id = Number(value);
          break;
      }

      return current;
    });
  }
}
