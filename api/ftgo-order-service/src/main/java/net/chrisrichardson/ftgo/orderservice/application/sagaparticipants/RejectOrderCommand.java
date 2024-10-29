package net.chrisrichardson.ftgo.orderservice.application.sagaparticipants;

public class RejectOrderCommand extends OrderCommand {

  private RejectOrderCommand() {
  }

  public RejectOrderCommand(long orderId) {
    super(orderId);
  }
}
