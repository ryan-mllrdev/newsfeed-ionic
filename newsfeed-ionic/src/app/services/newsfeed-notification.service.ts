import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'platform',
})
export class NewsfeedNotificationService {
  constructor(private toastController: ToastController) {}

  async showSuccess(successMessage: string) {
    const toast = await this.toastController.create({
      message: successMessage,
      color: 'success',
      duration: 2000,
    });
    toast.present();
  }

  async showError(errorMessage: string) {
    const toast = await this.toastController.create({
      message: errorMessage,
      color: 'danger',
      duration: 2000,
    });
    toast.present();
  }
}
