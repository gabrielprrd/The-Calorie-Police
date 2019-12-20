import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { TabButtonsContainer, InfoTabsDiv, InfoTabsInnerDiv } from '../../styles'

const UserPageInfo = ({showTabInfo}) => {
    return (
        <>  
            <TabButtonsContainer>
                <Button color="primary" variant="outlined" onClick={showTabInfo}>Calculating and Understanding Caloric Needs</Button>
                <Button color="primary" variant="outlined" onClick={showTabInfo}>Calorie Intake Calculation</Button>
                <Button color="primary" variant="outlined" onClick={showTabInfo}>Interpreting the results</Button>
            </TabButtonsContainer>
            
            <InfoTabsDiv>
                <InfoTabsInnerDiv>
                    <Typography variant="h5">How many calories do I need?</Typography>

                    What is my daily calorie intake, and how many calories do I actually need per day? These are questions anyone who has ever been concerned with their health or weight has asked many times before. And the answer? Well, when it comes to your wellbeing, it’s vital! If you’re consuming more calories than you need per day, you’re bound to keep piling on the pounds year after year. This can lead to being overweight, developing cardiovascular disease, and even becoming obese. On the other hand, consuming to few calories can be just as dangerous. Depriving your body of essential nutrients, minerals and vitamins can easily lead to future health problems. Not to worry, though! With the free, online YAZIO Calorie Intake Calculator, you can easily calculate your recommended calorie intake. Simply fill in the required information, and, whether you’re looking to lose weight or gain weight, our daily calorie intake calculator will put you on the right path!
                
                    <Typography variant="h5">How our Calorie Intake Calculator works</Typography>

                    So, how exactly does our calculator find your daily calorie needs? Your recommended calorie intake depends on several different factors, including gender, age and daily activity. Our caloric needs calculator takes all of these variables into account. Gender, for example, plays an essential role in daily calorie intake calculation. Men generally have a higher muscle percentage than women. Since muscle burns calories faster than fat, the calorie requirements for men will be naturally higher than the calorie intake needs for women. Age also plays an essential role. As our bodies age, they burn fewer and fewer calories per day. That means, as an individual ages and their metabolism slows, their daily caloric needs decrease as well. This is an essential factor, especially if someone fails to reduce their calorie intake from year to year. Weight gain is generally the result. Lastly, but most certainly not least, is the factor of lifestyle and activity. Those with a physically active lifestyle will burn more calories during the day and will have higher calorie requirements. Furthermore, individuals participating in sports, and building more muscles as a result, will have a higher recommended calorie intake.
                </InfoTabsInnerDiv>

                <InfoTabsInnerDiv>
                    <Typography variant="h5">Daily calorie needs based on current weight</Typography>

                    If you’re looking to adjust your calorie intake in order to lose weight, to gain weight, or even maintain your weight, adapting your calorie consumption based on your size is essential. As would be expected, someone with a below average height is going to require a much lower calorie intake than someone of above average height. This is why we generally see men with higher daily caloric needs than women, as they tend to have much larger statures. Heavier people utilize more energy daily, and in turn require an increased caloric intake. Our caloric needs calculator takes this into account by requesting your current body weight. It’s also important to keep in mind that understanding and utilizing a calorie needs calculator and its suggested calorie intake is a process. If you’re looking to adjust calorie intake for weight loss, it must be done in a consistent and healthy manner. Dramatically dropping calorie intake or reverting to previous unhealthy eating habits will lead to a “yo-yo effect,” where you can easily gain back what you’ve lost, and put on even more weight than you started with. During weight loss, your body adjusts to a decrease in calorie intake. Start eating like you did before, and you’ll overwhelm your body with energy that it can’t spend.

                    <Typography variant="h5">The importance of daily activity</Typography>

                    If we were looking to simply calculate your Basal Metabolic Rate, or the amount of calories you burn while inactive (e.g. lying down), we could simply use the factors mentioned above. But, when looking to calculate daily calorie needs, it’s important to remember that we’re all different! Daily activity therefore becomes an essential element for our calorie needs calculator. Daily calorie intake for extremely active daily routing, like that of a construction worker, teacher or waiter, for example, should be much higher than that of an office worker, or someone with a less active lifestyle. To incorporate this vital factor, our calorie intake calculator adjusts the formula based on your daily activity. The calculator asks you to distinguish among the following activity rates: “Low activity” (e.g. office job), “somewhat active” (e.g. teacher), “active” (e.g. salesperson), or “very active” (e.g. builder). This Physical Activity Level, or PAL, is then incorporated into our calorie intake calculator and will yield a much more personal value.
                </InfoTabsInnerDiv>

                <InfoTabsInnerDiv>
                    <Typography variant="h5">Calorie needs based on weight goals</Typography>

                    Once all factors have been taken into account, and you’ve submitted your personal data, our calculator will show you your daily caloric needs! We even go one step further, giving you a range of calories that you should consume depending on your weight goals. While your calorie intake should be 400-500 calories below your normal daily intake when you’re looking to lose weight, for example, to gain weight healthily your daily intake should be 300-500 calories over your normal calorie consumption.

                    Calculating your necessary calorie consumption, however, is just the first step to reaching your health goals. With the YAZIO App for phones and tablets, not only will we help you find out how many calories you should be consuming, we’ll help you count and keep track of your daily activities and calorie counts as well. Thanks to the ease of our calculator and app, getting in shape has never felt so relaxed!    
                </InfoTabsInnerDiv>
            </InfoTabsDiv>
            
        </>
    )
}

export default UserPageInfo