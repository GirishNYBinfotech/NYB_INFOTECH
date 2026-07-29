import React from 'react'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import PropsPage from './pages_09-07-2026/props_09-07-2026/PropsPage';
import Employeepage from './pages_09-07-2026/mini-project/Employeepage';
import LocalstatePage from './pages_09-07-2026/state_09-07-2026/LocalstatePage';
import Contextpage from './pages_09-07-2026/state_09-07-2026/Contextpage';
import Globalstatepage from './pages_09-07-2026/state_09-07-2026/Globalstatepage';
import Contextpages from './pages_09-07-2026/Context_10-07-2026/Contextpages';
import Authenticationpage from './pages_09-07-2026/Context_10-07-2026/Authenticationpage';
import APIpages from './pages_09-07-2026/API_10-07-2026/APIpages';
import Axios from './pages_09-07-2026/API_10-07-2026/Axios';
import Apicallspage from './pages_09-07-2026/API_10-07-2026/Apicallspage';
import Assignmentpage from './pages_09-07-2026/API_10-07-2026/Assignmentpage';
import Projectpage from './pages_09-07-2026/Miniproject_10-07-2026/projectpage';
import Contextpage1 from './pages_09-07-2026/context_13-07-2027/Contextpage1';
import Contextpage2 from './pages_09-07-2026/context_13-07-2027/Contextpage2';
import Contexthookpage from './pages_09-07-2026/context_13-07-2027/Contexthookpage';
import Contextsharingpage from './pages_09-07-2026/context_13-07-2027/Contextsharingpage';
import Authenticationpage1 from './pages_09-07-2026/context_13-07-2027/Authenticationpage1';
import Themepage from './pages_09-07-2026/context_13-07-2027/Themepage';
import Contextspage from './pages_09-07-2026/context_13-07-2027/Contextspage';
import Counterpage from './pages_09-07-2026/Redux_14-07-2026/Counterpage';
import Employeepages from './pages_09-07-2026/Redux_14-07-2026/Employeepages';
import Providerpage from './pages_09-07-2026/Redux_14-07-2026/Providerpage';
import Slicepage from './pages_09-07-2026/Redux_14-07-2026/Slicepage';
import CounterP from './pages_09-07-2026/Redux15-07-2026/CounterP';
import Practicalpage from './pages_09-07-2026/Redux15-07-2026/practicalpage';
import Newpage from './pages_09-07-2026/Redux15-07-2026/Newpage';
import Cartpage from './pages_09-07-2026/Redux15-07-2026/Cartpage';
import StudentManagement from './components_09-07-2026/Redux_15-07-2026/Student/StudentMangement';
import Studentformpage from './pages_09-07-2026/Redux15-07-2026/Studentformpage';
import Contextspages from './pages_09-07-2026/Practice_16-07-2026/Contextspages';
import Newformpage from './pages_09-07-2026/Practice_16-07-2026/Empform/Newformpage';
import Cartpages from './pages_09-07-2026/Practice_16-07-2026/newpage/Cartpages';
import MiniProjectpages from './pages_09-07-2026/Practice_16-07-2026/Mini-projext/Miniprojectpages';
import Reduxtoolpage from './pages_09-07-2026/Practice_16-07-2026/Reduxtoolpage';
import ProbsandStatepage from './pages_09-07-2026/new_17-07-2026/Probs and statepages/ProbsandStatepage';
import APIspage from './pages_09-07-2026/new_17-07-2026/API/APIspage';
import StateManagmentpage from './pages_09-07-2026/new_17-07-2026/Statemanagment.jsx/StateManagmentpage';
import Assignmentpages from './pages_09-07-2026/new_17-07-2026/Assignment/Assignmentpages';
import Conditionalpage from './pages_09-07-2026/ConditionalRendering_20-07-2026/ConditionlPage/Conditionalpage';
import Showorhidepage from './pages_09-07-2026/ConditionalRendering_20-07-2026/Showorhidepage/Showorhidepage';
import Authenticationpagess from './pages_09-07-2026/ConditionalRendering_20-07-2026/Auhentication/Authenticationpage';
import Lodingpage from './pages_09-07-2026/ConditionalRendering_20-07-2026/Lodingpage/Lodingpage';
import Loginorlogout from './pages_09-07-2026/ConditionalRendering_20-07-2026/Loginorlogout';
import Userpages from './pages_09-07-2026/ConditionalRendering_20-07-2026/Userpages';
import Maininputpage from './pages_09-07-2026/ConditionalRendering_20-07-2026/Maininputpage';
import Preventdefaultpage from './pages_09-07-2026/ConditionalRendering_20-07-2026/Preventdefaultpage';
import UseEffectpage from './pages_09-07-2026/UseEffect&map_21-07-2026/UseEffect/UseEffectpage';
import Lifcyclepage from './pages_09-07-2026/UseEffect&map_21-07-2026/UseEffect/Lifcyclepage';
import Cleanuppage from './pages_09-07-2026/UseEffect&map_21-07-2026/UseEffect/Cleanuppage';
import APIPage from './pages_09-07-2026/UseEffect&map_21-07-2026/API/APIPage';
import Mappage from './pages_09-07-2026/UseEffect&map_21-07-2026/Mappage';
import Lodingerrorpage from './pages_09-07-2026/UseEffect&map_21-07-2026/Lodingerrorpage';
import Practicepage from './pages_09-07-2026/UseEffect&map_21-07-2026/Practicepage';
import ControlledFormpage from './pages_09-07-2026/Dynamic_Form_Handlingpage/ControlledFormpage';
import InputField from './pages_09-07-2026/Dynamic_Form_Handlingpage/Field&boxe/Field_box';
import MultipleInputpage from './pages_09-07-2026/Dynamic_Form_Handlingpage/MultipleInputpage';
import FormValidationpage from './pages_09-07-2026/Dynamic_Form_Handlingpage/FormValidationpage';
import Field_box from './pages_09-07-2026/Dynamic_Form_Handlingpage/Field&boxe/Field_box';
import Registerationformpage from './pages_09-07-2026/Dynamic_Form_Handlingpage/Registerationformpage';
import Formfieldpage from './pages_09-07-2026/Dynamic_Form_Handlingpage/Formfieldpage';
import Hoccall from './components_09-07-2026/High_order_Component_23-07-2026/Hoc/Hoccall';
import Authpage from './pages_09-07-2026/HOC_23-07-2026/Authpage';
import Loadingpage from './pages_09-07-2026/HOC_23-07-2026/Loadingpage';
import Authorizationpage from './pages_09-07-2026/HOC_23-07-2026/Authorizationpage';
import Reusablepage from './pages_09-07-2026/HOC_23-07-2026/Reusablepage';
import Prioritypage from './pages_09-07-2026/HOC_23-07-2026/Componentspage';
import Lodingpages from './pages_09-07-2026/HOC_23-07-2026/Lodingpages';
import Componentspage from './pages_09-07-2026/HOC_23-07-2026/Componentspage';
import Conditional_renderingpage from './pages_09-07-2026/Taskpages_24-07-2026/Conditionalpage/Conditional_renderingpage';
import Useeffectpages from './pages_09-07-2026/Taskpages_24-07-2026/Useeffectpage.jsx/Useeffectpages';
import Dynamic_form_handlingpage from './pages_09-07-2026/Taskpages_24-07-2026/Dynamic_form_handlingpage/Dynamic_form_handlingpage';
import HocPages from './pages_09-07-2026/Taskpages_24-07-2026/Hocpages/HocPages';
import DynamicFormpage from './pages_09-07-2026/Taskpages_24-07-2026/Dynamic_form_handlingpage/DynamicFormpage';
import API_integrationpage from './pages_09-07-2026/Taskpages_24-07-2026/Api_integrationspages/API_integrationpage';
import Apicallspages from './pages_09-07-2026/Taskpages_24-07-2026/Api_integrationspages/Apicallspages';
import Employeespages from './pages_09-07-2026/Taskpages_24-07-2026/Employeespages';
import Apimethodspage from './pages_09-07-2026/API&memopage/API/Apimethodspage';
import Handlingpage from './pages_09-07-2026/API&memopage/API/Handlingpage';
import Useeffect_pages from './pages_09-07-2026/API&memopage/API/Useeffect_pages';
import Reusablepages from './pages_09-07-2026/API&memopage/API/Reusablepages';
import Compare from './pages_09-07-2026/API&memopage/Memo()/Compare';
import Reusable_componentspage from './pages_09-07-2026/API&memopage/Reusable_componentspage';
import ChildMemopage from './pages_09-07-2026/API&memopage/ChildMemopage';
import Miniassignmentpage from './pages_09-07-2026/API&memopage/Miniassignmentpage';
import Fragmentspages from './pages_09-07-2026/Task_28-07-2026/Fragments/Fragmentspages';
import Lodingpagess from './pages_09-07-2026/Task_28-07-2026/HOCpages/Lodingpagess';
import Loginpages from './pages_09-07-2026/Task_28-07-2026/HOCpages/Loginpages';
import Counterspage from './pages_09-07-2026/Task_28-07-2026/hooks/Counterspage';
import CoustomHookPage from './pages_09-07-2026/Task_28-07-2026/Customhookpage/CoustomHookPage';
import Minipractice from './pages_09-07-2026/Task_28-07-2026/Minipractice';
import Counterspagess from './pages_09-07-2026/TaskPage_29-07-2026/PureComponents/Counterspagess';
import Employee from './pages_09-07-2026/TaskPage_29-07-2026/React.memopage/Employee';
import Comparepage from './pages_09-07-2026/TaskPage_29-07-2026/React.memopage/Comparepage';
import Usememo from './pages_09-07-2026/TaskPage_29-07-2026/Usememo';
import Usecallbackpage from './pages_09-07-2026/TaskPage_29-07-2026/Usecallbackpage';
import Employeeusecallbackpages from './pages_09-07-2026/TaskPage_29-07-2026/Employeeusecallbackpages';
import Minipracticepages from './pages_09-07-2026/TaskPage_29-07-2026/Minipracticepages';
// import Providerpage from './pages_09-07-2026/Redux15-07-2026/Providerpage';



function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path='/props' element={<PropsPage/>}/>
    <Route path='/localstate' element={<LocalstatePage/>}/>
    <Route path='/employee' element={<Employeepage/>}/>
    <Route path='/context' element={<Contextpage/>}/>
    <Route path='/globalpage' element={<Globalstatepage/>}/>
    <Route path='/contexts' element={<Contextpages/>}/>  
    <Route path='/auth' element={<Authenticationpage/>}/>            
    <Route path='/api' element={<APIpages/>}/>   
    <Route path='/axios' element={<Axios/>}/>   
    <Route path='/apicalls' element={<Apicallspage/>}/>
    <Route path='/assignment' element={<Assignmentpage/>}/>
    <Route path='/miniproject' element={<Projectpage/>}/> 
    <Route path='/con' element={<Contextpage1/>}/>  
    <Route path='/cont' element={<Contextpage2/>}/> 
    <Route path='/contexthook' element={<Contexthookpage/>}/>
    <Route path='/contextsharing' element={<Contextsharingpage/>}/>   
    <Route path='/authentication' element={<Authenticationpage1/>}/>  
    <Route path='/theme' element={<Themepage/>}/>  
    <Route path='/infile' element={<Contextspage/>}/>  
    <Route path='/counter' element={<Counterpage/>}/> 
    <Route path='/emp' element={<Employeepages/>}/> 
    <Route path='/emp1' element={<Providerpage/>}/> 
    <Route path='/slice' element={<Slicepage/>}/> 
    <Route path='/coun' element={<CounterP/>}/> 
    <Route path='/practical' element={<Practicalpage/>}/> 
    <Route path='/new' element={<Newpage/>}/>
    <Route path='/cart' element={<Cartpage/>}/>  
    <Route path='/student' element={<StudentManagement/>}/> 
    {/* <Route path='/p' element={<Providerpage/>}/>  */}
    <Route path='/studentform' element={<Studentformpage/>}/>
    <Route path='/context1' element={<Contextspages/>}/>
    <Route path='/form' element={<Newformpage/>}/>
    <Route path='/cart1' element={<Cartpages/>}/>
    <Route path='/miniproject1' element={<MiniProjectpages/>}/>
    <Route path='/tool' element={<Reduxtoolpage/>}/>
    <Route path='/newprobs' element={<ProbsandStatepage/>}/>
    <Route path='/apicall' element={<APIspage/>}/>
    <Route path='/redux' element={<StateManagmentpage/>}/>
    <Route path='/assignment1' element={<Assignmentpages/>}/>
    <Route path='/conditional' element={<Conditionalpage/>}/>
    <Route path='/sh' element={<Showorhidepage/>}/>
    <Route path='/u' element={<Authenticationpagess/>}/>
    <Route path='/loding' element={<Lodingpage/>}/>
    <Route path='/log' element={<Loginorlogout/>}/>
    <Route path='/dep' element={<Userpages/>}/>
    <Route path='/mainpage' element={<Maininputpage/>}/>
    <Route path='/prevent' element={<Preventdefaultpage/>}/>
    <Route path='/useEffect' element={<UseEffectpage/>}/>
    <Route path='/dependency' element={<Lifcyclepage/>}/>
    <Route path='/cleanup' element={<Cleanuppage/>}/>
    <Route path='/apiuseeffect' element={<APIPage/>}/>
    <Route path='/map' element={<Mappage/>}/>
    <Route path='/Eloding' element={<Lodingerrorpage/>}/>
    <Route path='/practiceapi' element={<Practicepage/>}/>
    <Route path='/controlledform' element={<ControlledFormpage/>}/>
    <Route path='/inputfield' element={<Field_box/>}/>
    <Route path='/multipleinputs' element={<MultipleInputpage/>}/>
    <Route path='/validation' element={<FormValidationpage/>}/>
    <Route path='/formfield' element={<Formfieldpage/>}/>
    <Route path='/registration' element={<Registerationformpage/>}/>
    <Route path='/hoc' element={<Hoccall/>}/>
    <Route path='/authpage' element={<Authpage/>}/>
    <Route path='/lodingpage' element={<Loadingpage/>}/>
    <Route path='/authorization' element={<Authorizationpage/>}/>
    <Route path='/reusable' element={<Reusablepage/>}/>
    <Route path='/components' element={<Componentspage/>}/>
    <Route path='/spinning' element={<Lodingpages/>}/>
    <Route path='/rendering' element={<Conditional_renderingpage/>}/>
    <Route path='/useeffects' element={<Useeffectpages/>}/>
    <Route path='/integrations' element={<API_integrationpage/>}/>
    <Route path='/alldynamic' element={<DynamicFormpage/>}/>
    <Route path='/dynamic' element={<Dynamic_form_handlingpage/>}/>
    <Route path='/higher' element={<HocPages/>}/>
    <Route path='/calls' element={<Apicallspages/>}/>
    <Route path='/EMP2' element={<Employeespages/>}/>
    <Route path='/Apimethods' element={<Apimethodspage/>}/>
    <Route path='/handle' element={<Handlingpage/>}/>
    <Route path='/useeffectapi' element={<Useeffect_pages/>}/>
    <Route path='/reusableapi' element={<Reusablepages/>}/>
    <Route path='/memo' element={<Compare/>}/>
    <Route path='/rcomponent' element={<Reusable_componentspage/>}/>
    <Route path='/ChildMemo' element={<ChildMemopage/>}/>
    <Route path='/assignments' element={<Miniassignmentpage/>}/>
    <Route path='/fragments' element={<Fragmentspages/>}/>
    <Route path='/hocloding' element={<Lodingpagess/>}/>
    <Route path='/logi' element={<Loginpages/>}/>
    <Route path='/hookcounter' element={<Counterspage/>}/>
    <Route path='/coustomhook' element={<CoustomHookPage/>}/>
    <Route path='/minipractice' element={<Minipractice/>}/>
    <Route path='/Counters' element={<Counterspagess/>}/>
    <Route path='/emplist' element={<Employee/>}/>
    <Route path='/cmemo' element={<Comparepage/>}/>
    <Route path='/usememo' element={<Usememo/>}/>
    <Route path='/usecallback' element={<Usecallbackpage/>}/>
    <Route path='/empusecallback' element={<Employeeusecallbackpages/>}/>
    <Route path='/miniprac' element={<Minipracticepages/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App