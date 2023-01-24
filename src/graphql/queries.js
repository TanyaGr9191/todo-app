/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWeather = /* GraphQL */ `
  query GetWeather($city: String!) {
    getWeather(city: $city) {
      timestamp
      location
      condition
      description
      temperature
      pressure
      humidity
      wind_speed
      wind_direction
      cloud_cover
      rain_volume
      snow_volume
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      txt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        txt
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
