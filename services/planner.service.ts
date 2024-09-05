import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

interface Attraction {
  name: string;
  waitTime: number;
}

interface ScheduleDay {
  date: Date;
  attractions: Attraction[];
}

@Injectable({
  providedIn: 'root'
})
export class PlannerService {
  private attractions: { [key: string]: string[] } = {
    'magic-kingdom': [
      'Space Mountain', 'Big Thunder Mountain', 'Splash Mountain', 
      'Haunted Mansion', "It's a Small World", 'Pirates of the Caribbean'
    ],
    'epcot': [
      'Soarin', 'Test Track', 'Mission: SPACE', 'Spaceship Earth', 
      'Frozen Ever After', 'Remy's Ratatouille Adventure'
    ],
    'hollywood-studios': [
      'The Twilight Zone Tower of Terror', 'Rock 'n' Roller Coaster', 
      'Star Wars: Rise of the Resistance', 'Millennium Falcon: Smugglers Run', 
      'Slinky Dog Dash', 'Toy Story Mania!'
    ],
    'animal-kingdom': [
      'Avatar Flight of Passage', 'Expedition Everest', 'Kilimanjaro Safaris', 
      'Dinosaur', 'Kali River Rapids', 'It's Tough to be a Bug!'
    ]
  };

  generateSchedule(park: string, optimalDates: Date[]): Observable<ScheduleDay[]> {
    const schedule = optimalDates.map(date => this.generateDaySchedule(park, date));
    // Simulate API delay
    return of(schedule).pipe(delay(1000));
  }

  private generateDaySchedule(park: string, date: Date): ScheduleDay {
    const parkAttractions = this.attractions[park] || [];
    const shuffled = [...parkAttractions].sort(() => 0.5 - Math.random());
    const selectedAttractions = shuffled.slice(0, 5); // Select 5 random attractions

    const attractions: Attraction[] = selectedAttractions.map(name => ({
      name,
      waitTime: Math.floor(Math.random() * 60) + 15 // Random wait time between 15-75 minutes
    }));

    return { date, attractions };
  }
}
