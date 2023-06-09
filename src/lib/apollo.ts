import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clhdz6at831st01t7fk4khn15/master',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODYxOTA3NzgsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xoZHo2YXQ4MzFzdDAxdDdmazRraG4xNS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiYTM1MTE3ZjktYWU0ZC00ZWY4LWJkNTUtMjMwNGJlNjkxZTFiIiwianRpIjoiY2xpbWlnYjlmMHJmdTAxdWo3aDMzM3JodCJ9.UsghGRtFtU5FFZvvfMqYWWk2zFJ1fFwIuPyK1zSrZmLy-gvDp_JY3h36HJK5V8vgKPknL8eam6o1hbTNMXIt_P0Ve42UFl1x6d531JrGxb88OZJhYCSz7VJBiXzVzs_xCYC1OJj-cVuzz44SYOLX5NSlnZe7A894hdkzdra5QTitDzSJVZLddk3JOfepqFp14xLFrBAFnqjA218D2hOUAzxr0PCl0D7EFChDAA8033KlrT5mBHcmsJEeGQ8rlfhN_LEuXaqr0S-QmKth_92ryY102F5jcR8a9E6aEX4MCtWyLHI_4810pZuCmbVvCzMmEGueDkEOuZMdJf8uh0AyYiQdYITxAukrWy2b58E5jNs2mD7JSb4-AU1yuotqCyvnoxMlACSYRdBHxw4ZG701-H4xzq30iHaPmrEsGu60cBRjegib1lImw7Sddz8OR8MCemNL5RhAY3mo5T0FOc9nzhPo3p-v0u40FTomJoTlb281c2tZY9x-kB7XttZwhRSoA-wIyM--0FOyj7GYFf4lB2LTTNCIEI1Ca1-3LG-lQ0B-PrKWE1cD1JEGxdnQTYX4nL8q77BUeZ0eiXhChBAxeHuOrZ6Njbi72ACKQmX1__xgevyVcp0Di8KyfK0eAap8Y73vo28TIt5qaou9XZyrFP_1PsolXwKpoUP_tjwHDHA'
  },
  cache: new InMemoryCache()
})