import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {GRAPH_ENDPOINT} from "../../constants/ms-graph.ts";
import {RootState} from "../index.ts";

export const plannerApi = createApi({
    reducerPath: 'plannerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: GRAPH_ENDPOINT+'/planner/tasks',
        prepareHeaders: (headers, {getState})=> {
            const state: RootState = getState()
            headers.set('authorization', `Bearer ${state.user.token}`);
            return headers
        }
    }),
    endpoints: (builder)=> ({
        getMyPlannerTasks: builder.query({
            query: ()=> '/'
        })
    })
})

export const {useGetMyPlannerTasksQuery}  = plannerApi