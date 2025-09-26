import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subcategory-details',
  standalone: false,
  templateUrl: './subcategory-details.page.html',
  styleUrls: ['./subcategory-details.page.scss'],
})
export class SubcategoryDetailsPage implements OnInit {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  category = '';
  subcategory = '';
  description = '';
  imageUrl = '';
  audioUrl = '';
  counter = 0;
  targetCount: number | null = null;

  readonly YOGA_DETAILS: any = {
    'Anulom Vilom': {
      description: `
      **Anulom Vilom Pranayama**

      **Steps to Perform:**
      1. Sit in a comfortable meditative posture with spine straight and eyes closed.
      2. Use your right thumb to close your right nostril.
      3. Inhale slowly and deeply through the left nostril.
      4. Close the left nostril with your ring finger, and release the thumb from your right nostril.
      5. Exhale completely through the right nostril.
      6. Inhale through the right nostril, then close it and exhale through the left.
      7. This completes one round. Repeat for 5–10 minutes.

      **Benefits:**
      - Calms the mind and reduces stress and anxiety
      - Improves respiratory health
      - Balances the left and right hemispheres of the brain
      - Enhances oxygen supply to the body
      - Promotes emotional stability and focus
    `,
      imageUrl: 'assets/anulom-vilom.png',
      audioUrl: 'assets/Bhramari.mp3',
    },

    Bhramari: {
      description: `
      **Bhramari Pranayama (Bee Breath)**

      **Steps to Perform:**
      1. Sit comfortably in a quiet place with your spine erect.
      2. Close your eyes and take a few deep breaths.
      3. Place your index fingers on your ears (cartilage not inside).
      4. Inhale deeply through the nose.
      5. While exhaling, press gently on the cartilage and make a humming sound like a bee (mmmm…).
      6. Focus on the sound vibrations. Repeat 5–7 times.

      **Benefits:**
      - Reduces tension, anger, and anxiety
      - Calms the nervous system and mind
      - Helps with insomnia and hypertension
      - Improves voice quality and throat health
      - Enhances concentration and memory
    `,
      imageUrl: 'assets/bhramari.png',
      audioUrl: 'assets/Bhramari.mp3',
    },
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.category = params.get('category') || '';
      this.subcategory = params.get('sub') || '';

      const details = this.YOGA_DETAILS[this.subcategory];
      if (details) {
        this.description = details.description;
        this.imageUrl = details.imageUrl;
        this.audioUrl = details.audioUrl;
      }
    });
  }

  startAutoPlay() {
    if (!this.targetCount || this.targetCount <= 0) return;

    this.counter = 0; // reset counter
    const audio = this.audioPlayer.nativeElement;

    audio.currentTime = 0;
    audio.play();

    audio.onended = () => {
      this.counter++;
      if (this.counter < this.targetCount!) {
        audio.currentTime = 0;
        audio.play();
      }
    };
  }
}
