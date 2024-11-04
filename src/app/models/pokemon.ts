export interface Pokemon {
    name: string;
    sprites: {
      front_default: string;
    };
    abilities: {
      ability: {
        name: string;
      };
    }[];
    game_indices: {
      version: {
        name: string;
      };
    }[];
    isFavorite?: boolean;  // Propiedad para manejar los favoritos
}
  