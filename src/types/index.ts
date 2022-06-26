type Sprites = {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
};

export type Pokimon = {
  weight: number;
  id: string;
  name: string;
  sprites: Sprites;
};
export type PokimonListInitiaState = {
  isLoading: boolean;
  pokimons: Pokimon[];
  errorMessage: string;
};
export type StartFetching = {
  type: string;
};
export type FetchingPokimonsSuccess = {
  type: string;
  payload: {
    isLoading: boolean;
    pokimons: Pokimon[];
  };
};
export type FetchingPokimonDetailsSuccess = {
  type: string;
  payload: {
    isLoading: boolean;
    pokimon: Pokimon;
  };
};
export type FetchingPokimonDetailsFail = {
  type: string;
  payload: PokimonDetailsPayloadOnFail;
};

export type FetchingPokimonsFail = {
  type: string;
  payload: PokimonPayloadOnFail;
};
export type PokimonPayload = {
  isLoading: boolean;
  pokimons: Pokimon[];
  errorMessage?: string;
};
export type PokimonDetailsPayload = {
  isLoading: boolean;
  pokimon: Pokimon;
  errorMessage?: string;
};
export type PokimonPayloadOnFail = {
  isLoading: boolean;
  errorMessage: string;
};
export type PokimonDetailsPayloadOnFail = {
  isLoading: boolean;
  errorMessage: string;
};
export type PokimosListAction = {
  type: string;
  payload: PokimonPayload;
};

export type PokimonDetailsAction = {
  type: string;
  payload: PokimonDetailsPayload;
};
export type PokimonDetaislState = {
  isLoading: boolean;
  errorMessage: string;
  pokimon: Pokimon | null;
};
