export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Current = {
  __typename?: 'Current';
  clouds?: Maybe<Scalars['Int']['output']>;
  dew_point?: Maybe<Scalars['Float']['output']>;
  dt: Scalars['Int']['output'];
  feels_like?: Maybe<Scalars['Float']['output']>;
  humidity?: Maybe<Scalars['Int']['output']>;
  pressure?: Maybe<Scalars['Int']['output']>;
  sunrise: Scalars['Int']['output'];
  sunset: Scalars['Int']['output'];
  temp?: Maybe<Scalars['Float']['output']>;
  uvi?: Maybe<Scalars['Int']['output']>;
  visibility?: Maybe<Scalars['Int']['output']>;
  weather: Array<WeatherEntry>;
  wind_deg?: Maybe<Scalars['Int']['output']>;
  wind_gust?: Maybe<Scalars['Float']['output']>;
  wind_speed?: Maybe<Scalars['Float']['output']>;
};

export type DailyEntry = {
  __typename?: 'DailyEntry';
  clouds: Scalars['Int']['output'];
  dew_point: Scalars['Float']['output'];
  dt: Scalars['Int']['output'];
  feels_like: FeelsLike;
  humidity: Scalars['Int']['output'];
  moon_phase: Scalars['Float']['output'];
  moonrise: Scalars['Int']['output'];
  moonset: Scalars['Int']['output'];
  pop: Scalars['Float']['output'];
  pressure: Scalars['Int']['output'];
  rain?: Maybe<Scalars['Float']['output']>;
  summary: Scalars['String']['output'];
  sunrise: Scalars['Int']['output'];
  sunset: Scalars['Int']['output'];
  temp: Temp;
  uvi: Scalars['Float']['output'];
  weather: Array<Maybe<Weather2Entry>>;
  wind_deg: Scalars['Int']['output'];
  wind_gust: Scalars['Float']['output'];
  wind_speed: Scalars['Float']['output'];
};

export type FeelsLike = {
  __typename?: 'FeelsLike';
  day?: Maybe<Scalars['Float']['output']>;
  eve?: Maybe<Scalars['Float']['output']>;
  morn?: Maybe<Scalars['Float']['output']>;
  night?: Maybe<Scalars['Float']['output']>;
};

export type HourlyEntry = {
  __typename?: 'HourlyEntry';
  clouds?: Maybe<Scalars['Int']['output']>;
  dew_point?: Maybe<Scalars['Float']['output']>;
  dt: Scalars['Int']['output'];
  feels_like?: Maybe<Scalars['Float']['output']>;
  humidity: Scalars['Int']['output'];
  pop: Scalars['Float']['output'];
  pressure?: Maybe<Scalars['Int']['output']>;
  /** Field "rain" typed as JSON since none of its fields is a valid GraphQL identifier ["1h"] */
  temp: Scalars['Float']['output'];
  uvi: Scalars['Float']['output'];
  visibility?: Maybe<Scalars['Int']['output']>;
  weather: Array<Weather1Entry>;
  wind_deg?: Maybe<Scalars['Int']['output']>;
  wind_gust?: Maybe<Scalars['Float']['output']>;
  wind_speed?: Maybe<Scalars['Float']['output']>;
};

export type Query = {
  __typename?: 'Query';
  myQuery?: Maybe<Root>;
};


export type QueryMyQueryArgs = {
  appid?: InputMaybe<Scalars['String']['input']>;
  exclude?: InputMaybe<Scalars['String']['input']>;
  lat?: InputMaybe<Scalars['String']['input']>;
  lon?: InputMaybe<Scalars['String']['input']>;
  units?: InputMaybe<Scalars['String']['input']>;
};

export type Root = {
  __typename?: 'Root';
  current: Current;
  daily: Array<DailyEntry>;
  hourly: Array<HourlyEntry>;
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
  timezone: Scalars['String']['output'];
  timezone_offset?: Maybe<Scalars['Int']['output']>;
};

export type Temp = {
  __typename?: 'Temp';
  day?: Maybe<Scalars['Float']['output']>;
  eve?: Maybe<Scalars['Float']['output']>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  morn?: Maybe<Scalars['Float']['output']>;
  night?: Maybe<Scalars['Float']['output']>;
};

export type Weather1Entry = {
  __typename?: 'Weather1Entry';
  description: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  main?: Maybe<Scalars['String']['output']>;
};

export type Weather2Entry = {
  __typename?: 'Weather2Entry';
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  main?: Maybe<Scalars['String']['output']>;
};

export type WeatherEntry = {
  __typename?: 'WeatherEntry';
  description: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  id?: Maybe<Scalars['Int']['output']>;
  main?: Maybe<Scalars['String']['output']>;
};
