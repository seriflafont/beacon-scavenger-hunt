import {Clue} from '../components/clue';
export class Item{
	id: number;
	name: string;
	clues:Clue[];
	found:boolean;
	ingame:boolean;
	itemvalue:number;
	currentvalue:number
}
