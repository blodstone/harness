<template>
    <div class="document">
        <!-- eslint-disable -->
        <h1 align="center">
            Please Read This Thoroughly Before You Consent!
        </h1>
      <p>Your task is to assess the <strong>fluency</strong> of an English summary sentence. A <strong>fluent</strong> summary should sound natural and has no grammar-related problem that makes the text difficult to read.</p>
      <p>There are at most 8 sentences that need to be evaluated separately. The task should be possible to complete in less than <strong>2 minutes</strong>.</p>
        <hr/>

        <p>The following are assessment of a bad summary that is not fluent:</p>
       <blockquote>
            <strong>Lack of Fluency</strong><br/>
          David Robert Joseph Beckham, born 2 May 1975, <a class="highlight">are a</a> English retired professional footballer and current <a class="highlight">current</a> President of Inter Miami CF.
         <p><strong>Explanation:</strong> The highlighted words have grammar-related problem or duplicity.</p>
        </blockquote>
        <p>You will be scoring each summary sentence by stating how strongly you agree or disagree using a slider from scale 1 (strong disagreement) to 100 (strong agreement).</p>
        <hr />
        <h4><strong>Sanity Check</strong></h4>
      <p>We have inserted <strong>an obviously bad, mediocre and good summaries</strong> in between a real summaries. A bad summary has many grammatical mistakes and isn't fluent at all, a mediocre summary has some grammatical mistakes but still understandable, while a good summary has no grammatical mistakes and is fluent.</p>
      <p>Any submission that failed to recognize the bad, mediocre and good summaries with a suitable scores (bad < mediocre < good) will be <strong>rejected.</strong></p>
        <hr/>
        <p>There is a <strong>code</strong> that you have to copy and paste to Amazon platform at the end of the task.</p>

        <p>Thank you for reading this</p>
        <p>
            Do you consent for this information to be used
            anonymously for research purposes only?
        </p>
        <!-- eslint-enable -->
    </div>
</template>

<script>
export default {
  name: 'LandingInfRefMTurk',
};
</script>
<style scoped lang="scss">
h3 {
    margin-top: 2rem;
    margin-bottom: 3rem;
}
.document {
  font-family: 'Lora', serif;
  font-size: 1.1rem;
  line-height: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
}
.highlight {
  color: red;
}
</style>
