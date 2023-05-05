import {useGetMyPlannerTasksQuery} from '../store/api/planner'

const Home = () => {

    const {data} =  useGetMyPlannerTasksQuery(1)
    console.log(data)
    return (
        <div>
            home
        </div>
    );
};

export default Home;
