export class DateFormat {
  //d MMMM
  //ua-Uk
  public static transformDate(dateString: string): string  {
    console.log(dateString)
    let date = new Date(dateString);
    console.log(date);
    return date.toLocaleDateString('ua-Uk');
  }
}
